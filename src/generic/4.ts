/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface pageProps{
  title:string
}
class Component {
  constructor (public props:pageProps) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};