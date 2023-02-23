import Head from "next/head";


type Props = {
  title: string;
  description: string;
  keywords: string;
  author: string;
}


const Meta = ({ title, author, keywords, description }: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <title>{title.includes('Judah') ? title : title.concat(' | Judah Sullivan')}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Judah Sullivan - Graphic Artist and Web Developer',
  keywords: 'Web Developer, Programmer, Portfolio  , UI/UX Designer, React, Next, Web Design, Chakra-ui, TypeScript',
  description: 'Software Developer with a passion for UI-Design and Problem Solving',
  author: 'Judah Sullivan'
}


export default Meta;
