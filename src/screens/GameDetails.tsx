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
  });

  if (!data?.games || loading) {
    return (
      <SafeArea style={tailwind('bg-dark-dark')}>
        <GameListContentLoader />
      </SafeArea>
    );
  }

  const {cover, artworks, screenshots, platforms, involved_companies} =
    data?.games[0];
  const platformNames = platforms?.map(({name}) => name);
  const developerNames = involved_companies?.map(({company}) => company?.name);

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
        <GameDetailsHeader gameDetails={data.games[0]} />
      </Block>

      <Block style={tailwind('flex-1 px-2 text-white')}>
        <HorizontalSliderContent name="platforms" data={platformNames} />
        <HorizontalSliderContent name="developers" data={developerNames} />
      </Block>
    </BackgroundImage>
  );
};
