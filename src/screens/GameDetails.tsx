import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {Block} from '../components/containers/Block';
import {SafeArea} from '../components/containers/SafeArea';
import {GameListContentLoader} from '../components/elements/GameListContentLoader';
import {HorizontalSliderContent} from '../components/elements/HorizontalSliderContent';
import {GameDetailsHeader} from '../components/GameDetailsHeader';
import {useGameDetailsQuery} from '../graphql/generated/schema';
import {RootStackParamList} from '../navigation/AppNav';
import {gameDetailsVariables} from '../utils/apolloVariables';

export type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;

interface GameDetailsProps {
  route: GameDetailsRouteProp;
}

export const GameDetails: React.FC<GameDetailsProps> = ({
  route: {
    params: {id},
  },
}) => {
  const tailwind = useTailwind();
  const {data, loading} = useGameDetailsQuery({
    variables: gameDetailsVariables(id),
    fetchPolicy: 'no-cache',
  });

  if (!data?.game || loading) {
    return (
      <SafeArea style={tailwind('bg-dark-dark')}>
        <GameListContentLoader />
      </SafeArea>
    );
  }

  const {cover, artworks, screenshots, platforms, involved_companies} =
    data?.game;
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

  return (
    <BackgroundImage
      safeArea
      img={
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
      }>
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
      </Block>
    </BackgroundImage>
  );
};
