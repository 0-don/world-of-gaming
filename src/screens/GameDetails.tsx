/* eslint-disable react-native/no-inline-styles */
import {RouteProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {GameListContentLoader} from '../components/elements/GameListContentLoader';
import {useGameDetailsLazyQuery} from '../graphql/generated/schema';
import {RootStackParamList} from '../navigation/AppNav';
import useGamesStore from '../store/GamesStore';
import {gameDetailsVariables} from '../utils/apolloVariables';
import {GamesNavigationProp} from './Games';
import placeholder from '../assets/images/placeholder_game.png';
import CircularProgress from 'react-native-circular-progress-indicator';
import {color} from '../utils/utils';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
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
    first_release_date,
    name,
    // platforms,
    genres,
    game_modes,
    aggregated_rating,
  } = gameDetails;

  const images = () => {
    const screenshotsUrls = screenshots
      ?.filter(({url}) => url)
      ?.map(({url}) => url);
    const artworksUrls = artworks?.filter(({url}) => url)?.map(({url}) => url);

    const urls = [...(screenshotsUrls || []), ...(artworksUrls || [])];
    cover?.url && urls.push(cover?.url);
    return urls[Math.floor(Math.random() * urls.length)];
  };

  const Block: React.FC<{style: ViewStyle}> = ({children, style}) => (
    <View
      style={{
        ...tailwind('mx-2 rounded-md py-2'),
        ...style,
        backgroundColor: 'rgba(23,23,23,0.95)',
      }}>
      {children}
    </View>
  );
  const genresList = genres?.map(genre => genre.name);
  const gameModeList = game_modes?.map(gameMode => gameMode.name);

  return (
    <BackgroundImage safeArea img={images()}>
      <Block style={tailwind('flex-row')}>
        <View style={tailwind('relative')}>
          <Image
            source={cover?.url ? {uri: cover.url} : placeholder}
            resizeMode="contain"
            style={tailwind(
              `mx-2 h-36 rounded-md ${
                cover?.url ? '[aspectRatio:0.75]' : 'w-24' //i hate react native image support
              }`,
            )}
          />
          {aggregated_rating && (
            <View
              style={tailwind(
                'absolute bottom-0 right-0 -mr-4 rounded-full bg-dark-lightAlt',
              )}>
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
          )}
        </View>
        <View style={tailwind('ml-3 flex-1 justify-center')}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={tailwind('w-60 font-objektiv-mk1-bold text-xl text-white')}>
            {name}
          </Text>
          <View>
            {first_release_date && (
              <Text
                style={tailwind(
                  'font-objektiv-mk1-regular text-xs leading-5 text-white',
                )}>
                <Text style={tailwind('font-objektiv-mk1-bold text-sm')}>
                  release:{' '}
                </Text>
                {dayjs.unix(first_release_date).format('LL')}
              </Text>
            )}
            {genresList && (
              <Text
                style={tailwind(
                  'font-objektiv-mk1-regular text-xs leading-5 text-white',
                )}>
                <Text style={tailwind('font-objektiv-mk1-bold text-sm')}>
                  genres:{' '}
                </Text>
                {genresList.join(', ')}
              </Text>
            )}
            {gameModeList && (
              <Text
                style={tailwind(
                  'font-objektiv-mk1-regular text-xs leading-5 text-white',
                )}>
                <Text style={tailwind('font-objektiv-mk1-bold text-sm')}>
                  game modes:{' '}
                </Text>
                {gameModeList.join(', ')}
              </Text>
            )}
          </View>
        </View>
      </Block>
    </BackgroundImage>
  );
};
