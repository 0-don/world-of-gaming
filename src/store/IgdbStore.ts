import {immer} from '../utils/immer';
import create from 'zustand';
import {CLIENT_ID, CLIENT_SECRET} from '@env';
import {igdbUrl} from '../utils/constants';
import apicalypse from 'apicalypse';

type IgdbStore = {
  error: string;
  client_id: string;
  client_secret: string;
  access_token: string;
  expires_in: string;
  token_type: string;
  authenticate: () => void;
  getGames: () => void;
};

type AuthResponse = {
  access_token: string;
  expires_in: string;
  token_type: string;
};

const useIgdbStore = create<IgdbStore>(
  immer(
    (set, get): IgdbStore => ({
      error: '',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      access_token: '',
      expires_in: '',
      token_type: '',
      authenticate: () => {
        fetch(
          `https://id.twitch.tv/oauth2/token?client_id=${
            get().client_id
          }&client_secret=${get().client_secret}&grant_type=client_credentials`,
          {method: 'POST'},
        )
          .then(res => res.json())
          .then((res: AuthResponse) => {
            set(state => {
              state.access_token = res.access_token;
              state.expires_in = res.expires_in;
              state.token_type = res.token_type;
            });
          })
          .catch(err =>
            set(state => {
              console.log('igdb auth error', err);
              state.error = JSON.stringify(err);
            }),
          );
      },
      getGames: async () => {
        const requestOptions = {
          queryMethod: 'url',
          method: 'post',
          baseURL: igdbUrl,
          headers: {
            'Client-ID': get().client_id,
            Authorization: `Bearer ${get().access_token}`,
          },
        };
        const now = Date.now();
        const result = await apicalypse(requestOptions)
          .multi([
            apicalypse()
              .query('games', 'latest-games')
              .fields('name')
              .where(`created_at < ${now}`)
              .sort('created_at desc'),
            apicalypse()
              .query('games', 'coming-soon')
              .fields('name')
              .where(`created_at > ${now}`)
              .sort('created_at asc'),
          ])
          .request('/multiquery');

        console.log('igdb result', result);
      },
    }),
  ),
);

export default useIgdbStore;
