var Galery = React.createClass({
    ClickImg :function(){
        console.log(this);
        alert("asdsa");
    },
    render: function () {
        var article = this.props.articles.map(function(i){
            return <article  ><h1>{i.title}</h1><img onClick={this.ClickImg} src={i.src} /><div>{i.description}</div></article> ;
        },this);
        return <div>{article}</div>;
    }

})

var articles = [
  {title:'art1',src:'facebook.jpg' , description:'articulo1'},
    {title:'art2',src:'twitter.jpg' , description:'articulo2'},
      {title:'art3',src:'000' , description:'articulo3'}

]; 

ReactDOM.render(<Galery articles={articles} />, document.getElementById('container'));