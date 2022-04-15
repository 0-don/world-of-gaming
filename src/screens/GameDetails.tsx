import {RouteProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {GameListContentLoader} from '../components/elements/GameListContentLoader';
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

  const {
    cover,
    artworks,
    screenshots,
    // first_release_date,
    name,
    // platforms,
    // aggregated_rating,
  } = gameDetails;

  const images = () => {
    const screenshotsUrls = screenshots
      ?.filter(({url}) => url)
      ?.map(({url}) => url);
    const artworksUrls = artworks?.filter(({url}) => url)?.map(({url}) => url);

    const urls = [...(screenshotsUrls || []), ...(artworksUrls || [])];
    return urls[Math.floor(Math.random() * urls.length)];
  };

  return (
    <BackgroundImage safeArea img={images()}>
      <View style={tailwind('mx-2 flex-row rounded-md bg-dark py-2')}>
        <Image
          source={{uri: cover?.url || images() || ''}}
          resizeMode="contain"
          style={tailwind('mx-2 h-36 rounded-md [aspectRatio:0.75]')}
        />

        <View style={tailwind('flex-1 justify-between')}>
          <View style={tailwind('flex-row items-center justify-between')}>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={tailwind(
                  'w-52 font-objektiv-mk1-bold text-xl text-white',
                )}>
                {name}
              </Text>
              {/* {first_release_date && (
                <Text
                  style={tailwind(
                    'mt-0.5 font-objektiv-mk1-regular text-white',
                  )}>
                  release: {dayjs.unix(first_release_date).format('LL')}
                </Text>
              )} */}
            </View>
            {/* {aggregated_rating && (
              <View style={tailwind('mr-3')}>
                <CircularProgress
                  value={aggregated_rating}
                  radius={27.5}
                  maxValue={100}
                  activeStrokeColor={color(aggregated_rating)}
                  inActiveStrokeColor={'black'}
                  activeStrokeWidth={6}
                  progressValueColor={color(aggregated_rating)}
                  duration={2000}
                />
              </View>
            )} */}
          </View>
          {/* <View style={tailwind('flex-row')}>{platformLogos()}</View> */}
        </View>
      </View>
    </BackgroundImage>
  );
};
