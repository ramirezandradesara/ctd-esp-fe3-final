import CardCharacter from 'dh-marvel/components/Cards/CardCharacter';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
import { getCharacter, getCharacters } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await getCharacters();

  const paths = data.map((character: any) => {
    return { params: { id: character.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const character = await getCharacter(id);

  return {
    props: {
      character
    },
    revalidate: 10,
  };
};

function CharacterDetails({ character }: { character: any }) {
  return (
    <>
      <Head>
        <title>{character?.name} | DH MARVEL</title>
        <meta name="description" content={`${character?.name}: página detalle de personaje de cómic`} />
      </Head>
      <LayoutGeneral>
        <CardCharacter
          name={character?.name}
          description={character?.description}
          image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          id={character?.id}
        />
      </LayoutGeneral>
    </>
  )
}

export default CharacterDetails

