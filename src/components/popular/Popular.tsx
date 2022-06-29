import React, { Component } from "react";
import { default as Slider, Settings, CustomArrowProps } from "react-slick";
import Image from "next/image";

// styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './popular.module.css'


// icons
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { Datum } from "../../interfaces/types";
import { formImageToUrl } from "../../../utility/url";
import Link from "next/link";


// 



function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className='slick-arrow'
      style={{ ...style, display: "flex",
       position: 'absolute',
        top:'-25px',
        right: '60px',
        marginTop: '-20px',
        width: '30px',
        height: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
     }}
      onClick={onClick}
    >
        <div style={{ border: '1px solid rgba(96, 96, 96,0.8)', display: 'flex'}}>
            <BsArrowRightShort style={{
                fontSize: '2rem',
                color: 'rgb(96, 96, 96)'
            }}/>
        </div>
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style,  onClick } = props;
  return (
    <div
      className='slick-arrow'
      style={{ 
      ...style,
      display: "flex", 
      position: 'absolute', 
      top: '-45px',
      right: '120px',
      width: '30px',
      height: '30px',
      alignItems: 'center',
      justifyContent: 'center',
        
    }}
      onClick={onClick}
    >
        <div style={{ 
        border: '1px solid rgba(96, 96, 96,0.8)',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         cursor: 'pointer'
         }}>
            <BsArrowLeftShort style={{
                fontSize: '2rem',
                color: 'rgb(96, 96, 96)'
            }}/>
        </div>
    </div>
  );
}


interface IPopular{
  products: Datum[]
}

export default class Popular extends Component<IPopular> {
  

  render() {
    
    const defaultSettings: Settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      touchMove: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
            breakpoint: 1670,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1350,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 772,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 440,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
      ]
    };

    const items = this.props.products.map((item: Datum) => 
      <div key={item.id}>
            <div className={styles.imgContainer} >
            <Link href={`/product/${item.id}`} passHref>
              <Image 
                src={item.attributes.image.data.attributes.formats.small.url} 
                alt={item.attributes.slug}
                layout="fill"
                objectFit="cover"
                />
            </Link>
            </div>
      </div>
    )

    return (
      <>
      <div className={styles.container}>
        <Slider {...defaultSettings} >

          {items}
          
        </Slider>
      </div>

      </>
    );
  }
}