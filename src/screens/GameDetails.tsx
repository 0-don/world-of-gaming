import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {Block} from '../components/containers/Block';
import {SafeArea} from '../components/containers/SafeArea';
import {GameListContentLoader} from '../components/loaders/GameListContentLoader';
import {HorizontalSliderContent} from '../components/elements/HorizontalSliderContent';
import {HorizontalVideoSlider} from '../components/elements/HorizontalVideoSlider';
import {GameDetailsHeader} from '../components/GameDetailsHeader';
import {useGameDetailsQuery} from '../graphql/generated/schema';
import {RootStackParamList} from '../navigation/AppNav';
import {gameDetailsVariables} from '../utils/apolloVariables';

export type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;
export type GamesDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'GameDetails'
>;

interface GameDetailsProps {
  navigation: GamesDetailsNavigationProp;
  route: GameDetailsRouteProp;
}

export const GameDetails: React.FC<GameDetailsProps> = ({
  navigation,
  route: {
    params: {id},
  },
}) => {
  const tailwind = useTailwind();
  const {data, loading} = useGameDetailsQuery({
    variables: gameDetailsVariables(id),
    fetchPolicy: 'no-cache',
  });

  if (!data?.game || !loading) {
    return (
      <SafeArea style={tailwind('bg-dark-dark')}>
        <GameListContentLoader />
      </SafeArea>
    );
  }

  const {
    cover,
    artworks,
    screenshots,
    platforms,
    involved_companies,
    videos,
    summary,
    similar_games,
  } = data?.game;
  const platformNames = platforms?.map(({name}) => name);
  const developerNames = involved_companies?.map(({company}) => company?.name);

  const images = () => {
    const screenshotsUrls = screenshots
      ?.filter(({url}) => url)
      ?.map(({url}) => url);
    const artworksUrls = artworks?.filter(({url}) => url)?.map(({url}) => url);

    const urls = [...(screenshotsUrls || []), ...(artworksUrls || [])];
    cover?.url && urls.push(cover?.url);
    return urls;
  };

  const backgroundImages = images();
  const videosList = videos?.map(({video_id, name}) => ({video_id, name}));

  return (
    <BackgroundImage
      safeArea
      img={
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
      }>
      <ScrollView>
        <Block style={tailwind('flex-row')}>
          <GameDetailsHeader gameDetails={data.game} />
        </Block>

        <Block style={tailwind('flex-1 px-2 text-white')}>
          <HorizontalSliderContent name="platforms" data={platformNames} />
          <HorizontalSliderContent name="developers" data={developerNames} />
          <HorizontalSliderContent
            img
            name="images"
            data={images()}
            imgStyle={tailwind('mx-2 h-36 w-36')}
          />
          <HorizontalVideoSlider name="videos" data={videosList} />
        </Block>

        <Block style={tailwind('flex-1 px-2 text-white')}>
          {summary && (
            <>
              <Text
                style={tailwind('my-2 ml-1 font-objektiv-mk1-bold text-white')}>
                summary
              </Text>
              <Text style={tailwind('ml-1 font-objektiv-mk1-light text-white')}>
                {summary}
              </Text>
            </>
          )}

          {similar_games && (
            <>
              <Text
                style={tailwind('my-2 ml-1 font-objektiv-mk1-bold text-white')}>
                similar games
              </Text>
              <FlatList
                horizontal
                style={tailwind('mt-2')}
                data={similar_games}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.slug!}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('GameDetails', {id: item.id!})
                    }>
                    <Image
                      borderRadius={10}
                      resizeMode="cover"
                      source={{uri: item.cover?.url!}}
                      style={tailwind('mx-2 h-36 w-36')}
                    />
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={tailwind(
                        ' my-2 ml-1 w-36 font-objektiv-mk1-bold text-white',
                      )}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        </Block>
      </ScrollView>
    </BackgroundImage>
  );
};
