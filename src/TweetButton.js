import { Icon } from '@iconify/react';

const Tweet = (props) => {
  const twitterUrl = 'http://twitter.com/intent/tweet';
  const text = props.text;
  const hashtags = ['quote', 'freeCodeCamp'];
  // const twitterIcon = 'fa6-brands:twitter-square';
  const twitterIcon = 'fa6-brands:x-twitter'; 
  const twitterIconWidth = '2.0em';

  return (
    <p>
      <a
        href={`${twitterUrl}?text=${text}&hashtags=${hashtags}`}
        target='_blank'
        rel='noopener noreferrer'
        id='tweet-quote'
      >
        <Icon icon={twitterIcon} width={twitterIconWidth} />
      </a>
    </p>
  );
};

export default Tweet;
