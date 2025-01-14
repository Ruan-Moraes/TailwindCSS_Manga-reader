import { useMemo } from 'react';

import { TitleTypes } from '../../../types/TitleTypes';
import { StatusFetchTypes } from '../../../types/StatusFetchTypes';

import { COLORS } from '../../../constants/COLORS';

import Warning from '../../notifications/Warning';
import CustomLinkBase from '../../links/elements/CustomLinkBase';

type CardProps = Partial<
  Omit<
    TitleTypes,
    | 'synopsis'
    | 'popularity'
    | 'score'
    | 'author'
    | 'artist'
    | 'publisher'
    | 'createdAt'
    | 'updatedAt'
  >
> &
  StatusFetchTypes;

const Card = ({
  id,
  type = '...',
  cover = 'Carregando...',
  title = '...',
  chapters = '...',
  isLoading,
  isError,
}: CardProps) => {
  const lastChapter = useMemo(
    () => chapters?.split('/')?.slice(-1)[0],
    [chapters]
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-start flex-shrink-0">
        <div className="flex flex-col px-3 py-1 text-center rounded-sm rounded-b-none bg-tertiary">
          <span className="font-bold">{type}</span>
          <span className="text-xs">({chapters} Capítulos)</span>
        </div>
        <div className="flex justify-center items-center border border-b-0 border-tertiary w-[20rem] h-[14rem] relative">
          <span className="p-4 font-bold text-center text-tertiary">
            {cover}
          </span>
        </div>
        <div className="w-[20rem] px-2 py-1 rounded-b-sm bg-tertiary">
          <span className="block font-bold text-center truncate text-shadow-default">
            {title}
          </span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <Warning
        color={COLORS.QUINARY}
        message="Ocorreu um erro ao carregar os dados. Tente novamente mais tarde."
        title="Erro!"
      />
    );
  }

  return (
    <div className="flex flex-col items-start flex-shrink-0">
      <div className="flex flex-col px-3 py-1 text-center rounded-sm rounded-b-none bg-tertiary">
        <span className="font-bold">{type}</span>
        <span className="text-xs">({lastChapter} Capítulos)</span>
      </div>
      <div className="border border-b-0 border-tertiary w-[20rem] h-[14rem] relative">
        <CustomLinkBase href={`/titles/${id}`} className="block h-full">
          <img
            alt={`Capa do título: ${title}`}
            className="object-cover w-full h-full"
            src={cover}
          />
        </CustomLinkBase>
      </div>
      <div className="w-[20rem] px-2 py-1 rounded-b-sm bg-tertiary">
        <h3 className="font-bold text-center truncate text-shadow-default">
          <CustomLinkBase href={`/titles/${id}`} text={title} />
        </h3>
      </div>
    </div>
  );
};

export default Card;
