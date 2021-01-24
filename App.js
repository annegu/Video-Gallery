import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  first: 'https://r3---sn-gvbxgn-tt1el.googlevideo.com/videoplayback?expire=1611537303&ei=N8cNYMG-C-u07AT2777QBQ&ip=2a06%3Ac006%3Ad67e%3A4ed8%3Ac10d%3Ac2b%3A6f08%3A4397&id=o-ALH9m43kBMS3RmhLXjlR4tUq-MjnV8_YDqnUylp6XmCf&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=-EqkJkhplrDWG2aKWo9Q9DkF&gir=yes&clen=2647611&ratebypass=yes&dur=55.936&lmt=1530157897694116&fvip=15&c=WEB&n=k2SHNv5jbDXVZ5I&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANm7dEySPbIoMDd5kkVdBQ0DdiYcTnpN2cUW8ICFy_QFAiEA51fey8BgkGRCJHtMMUZ7_xqNMP7odsk5SsuCORk1u7U%3D&title=The+two+talking+cats&rm=sn-4pvgq-n8vs7s,sn-n8vyse6&req_id=eef046a94cf5a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=F8&mip=2607:fea8:3edf:3700:6969:e35b:13d3:f9b3&mm=29&mn=sn-gvbxgn-tt1el&ms=rdu&mt=1611515328&mv=m&mvi=3&pcm2cms=yes&pl=48&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRQIhANDTPFujrd-quGHDMe4BSvOI6lj39Ib21elSJrgUfOisAiA2wTcvgJScZmpPUw4vs6bjebwenaE0bcH3SRQMX60dVQ%3D%3D',
  second: 'https://r2---sn-4pvgq-n8vs.googlevideo.com/videoplayback?expire=1611537462&ei=1scNYO-sHZju7QTn5bDoAw&ip=2a06%3Ac006%3A24a5%3Aabfa%3Ac68a%3A6481%3A4ab6%3Af7d&id=o-AD2WbqLIhwUZllb9XcVZk9NeaRJzCE3JoRD30ZNl6nTk&itag=22&source=youtube&requiressl=yes&mh=WW&mm=31%2C29&mn=sn-4pvgq-n8vs%2Csn-n8v7zns6&ms=au%2Crdu&mv=m&mvi=2&pl=32&initcwndbps=411250&vprv=1&mime=video%2Fmp4&ns=MIv0bZCTL4fe4G8kqpAmSfYF&ratebypass=yes&dur=39.659&lmt=1512883311107463&mt=1611515566&fvip=17&c=WEB&n=YaZMdLdbuwEljIN&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgOAEc5K4EY8q9HvH3ai7xXAPzF5gzoH-uV6Zl2-KOGhwCIQDh4WrYVJby4xVr1Gy5gMhokHJpWfGp6-sGze0vJn77yw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMdnYxex9K2RkQyTT_EFGwVsjuL9ByVTjZm65yKQ8Qs4AiEAliEnzeR_nU9Wl40IvSCvygvjpMSbf2Xb0RJkEeEn35I%3D&title=when+Norbert+realizes+he%27s+getting+a+second+treat.....priceless',
  third: 'https://r3---sn-4pvgq-n8vs.googlevideo.com/videoplayback?expire=1611537664&ei=oMgNYJqjB4ej7AS704iADA&ip=2a06%3Ac006%3A473e%3A7897%3A6386%3A4656%3Abb72%3A9f2d&id=o-AARspxO8ytzdYAL0SVZRvz1wU1F9Kt_IcC0-OFF0DX3J&itag=22&source=youtube&requiressl=yes&mh=Hl&mm=31%2C29&mn=sn-4pvgq-n8vs%2Csn-n8v7sney&ms=au%2Crdu&mv=m&mvi=3&pl=32&pcm2=yes&initcwndbps=368750&vprv=1&mime=video%2Fmp4&ns=5flhFaR0IxdNDT2CnoFnjSsF&ratebypass=yes&dur=91.115&lmt=1578683970221119&mt=1611515806&fvip=16&beids=23886211&c=WEB&txp=6211222&n=7zI31BUEEKWn2IX&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgZhH5AaMmv5RO714gwPfktZd6bwCTRbB1hKB1JsRohIUCIQCYMMLn56TPN09L62DdVeKcCqdIhjS25dsS69vUn9LKZw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANitCOuCsrkFcBY_ljUfcCemkMBZyEfmJOjdS0LxxjMCAiEAs2fljYXzdTgl-rCPYBrLnxNwBxoh08PdgZxJDEjh0yk%3D&title=%23FlyingFriday+The+Slow-Motion+Art+of+Birds+Flying',
  fourth: 'https://r2---sn-4pvgq-n8vs.googlevideo.com/videoplayback?expire=1611537858&ei=YskNYKO4LZqj7QTdu4rwAw&ip=2a06%3Ac006%3Acdf1%3A3d66%3A8cb5%3A1097%3A81b9%3Ad265&id=o-AEHyY647brRELu5daO1ti12HOfpnd6kuD-Lx0yxC9NiK&itag=22&source=youtube&requiressl=yes&mh=2w&mm=31%2C29&mn=sn-4pvgq-n8vs%2Csn-n8v7knes&ms=au%2Crdu&mv=m&mvi=2&pl=32&initcwndbps=368750&vprv=1&mime=video%2Fmp4&ns=7oKfI41J8CBOEiGcE1t84U8F&ratebypass=yes&dur=269.792&lmt=1577180998851818&mt=1611515806&fvip=2&c=WEB&txp=5432432&n=HBkW8U4Z6kFp8dV&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgByF56bu55GOf6XFY_EbPWn9OfuH813CMVokMUzfd0dMCIQD2SA9bgOhU8KevNJ-x3U5qTol43GCNIn8gX2nZJ4aD7A%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgCVcJR5qOgyyWLGa9Z-5HkxRIdBJEIDQ7blN5yG94X6ACIQCakFN14_Jh04j5Zv-DrGKn8MqHEik0ZIcK2A8c5SVjUA%3D%3D&title=Lions+101++Nat+Geo+Wild'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    }); 
  }
  
  render() {
    return (
      <div>
        <h1>Video Gallery</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);