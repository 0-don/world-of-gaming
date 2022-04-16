import {RouteProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {Block} from '../components/containers/Block';
import {GameListContentLoader} from '../components/elements/GameListContentLoader';
import {GameDetailsHeader} from '../components/GameDetailsHeader';
import {useGameDetailsLazyQuery} from '../graphql/generated/schema';
import {RootStackParamList} from '../navigation/AppNav';
import useGamesStore from '../store/GamesStore';
import {gameDetailsVariables} from '../utils/apolloVariables';
import {GamesNavigationProp} from './Games';

export type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;

interface GameDetailsProps {
  navigation: GamesNavigationProp;
  route: GameDetailsRouteProp;
}

export const GameDetails: React.FC<GameDetailsProps> = ({
  route: {
    params: {id},
  },
}) => {
  const tailwind = useTailwind();
  const {gameDetails, setLoading, setGameDetails} = useGamesStore();
  const [getGameDetails] = useGameDetailsLazyQuery({
    variables: gameDetailsVariables(id),
  });

  useEffect(() => {
    const fethGameDetails = async () => {
      setLoading(true);
      const {data} = await getGameDetails();
      setGameDetails(data?.games);
      setLoading(false);
    };
    fethGameDetails();

    return () => setGameDetails(null);
  }, [setLoading, setGameDetails, getGameDetails]);

  if (!gameDetails) {
    return <GameListContentLoader />;
  }

  const {cover, artworks, screenshots} = gameDetails;

  const images = () => {
    const screenshotsUrls = screenshots
      ?.filter(({url}) => url)
      ?.map(({url}) => url);
    const artworksUrls = artworks?.filter(({url}) => url)?.map(({url}) => url);

    const urls = [...(screenshotsUrls || []), ...(artworksUrls || [])];
    cover?.url && urls.push(cover?.url);
    return urls[Math.floor(Math.random() * urls.length)];
  };

  return (
    <BackgroundImage safeArea img={images()}>
      <Block style={tailwind('flex-row')}>
        <GameDetailsHeader gameDetails={gameDetails} />
      </Block>
    </BackgroundImage>
  );
};
