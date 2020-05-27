const BITLY_BASEURL = 'https://bit.ly'
const notionTemplates = [
  {
    bitlyLink: `${BITLY_BASEURL}/notion-recipes`,
    title: 'Recipe Box',
    description: 'A master database of recipes I have tried or plan on trying.',
    icon: 'taco',
  },
  {
    bitlyLink: `${BITLY_BASEURL}/colorado-14ers`,
    title: '14er and 13er Summit Hikes',
    description:
      'A view within my master database of hikes that highlights trails to 13,000 and 14,000 foot peaks in Colorado.',
    icon: 'mountain',
  },
  {
    bitlyLink: `${BITLY_BASEURL}/backpacking-co`,
    title: 'Backpacking Options in Colorado',
    description:
      'A view within my master database of hikes that highlights trails long enough to overnight camp or backpack.',
    icon: 'backpack',
  },
]

export default notionTemplates
