import { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            i : 0,
            image : images[0].img,
            title : images[0].title,
            subtitle : images[0].subtitle
        }
    }

    previous() {
        if(this.state.image === images[0].img) {
            this.setState({
                i : 2,
                image : images[2].img,
                title : images[2].title,
                subtitle : images[2].subtitle
            })
        }

        else{
            this.setState({
                i : this.state.i - 1,
                image : images[this.state.i - 1].img,
                title : images[this.state.i - 1].title,
                subtitle : images[this.state.i - 1].subtitle
            })
        }
    }

    next() {
        if(this.state.image === images[2].img) {
            this.setState({
                i : 0,
                image : images[0].img,
                title : images[0].title,
                subtitle : images[0].subtitle
            })
        }

        else{
            this.setState({
                i : this.state.i+1,
                image : images[this.state.i + 1].img,
                title : images[this.state.i + 1].title,
                subtitle : images[this.state.i + 1].subtitle
            })
        }
    }

  render(){
    return(
        <div className="container" style={{
                backgroundImage: 'url(' + this.state.image + ')',
                backgroundSize: 'cover'
            }}>

            <div className="button" onClick = {() => this.previous()}>
                <ArrowBackIosIcon />
            </div>

            <div className="text-container">
                <h1>{this.state.title}</h1>
                <p>{this.state.subtitle}</p>
            </div>

            <div className="button" onClick = {() => this.next()}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
  }
}

export default Carousel;