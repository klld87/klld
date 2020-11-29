import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Slider from 'react-slick';

// Components
import NFTSliderItem from '../../components/NFTSliderItem';
import SliderArrow from '../../components/SliderArrow';

// Styles
import { Wrapper, Title, CloseIcon } from './styles';

const NFTBarModal = (props) => {
  const { open, onCloseModal } = props;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
      <Wrapper>
        <Title>My NFT bar</Title>
        <CloseIcon onClick={onCloseModal} />
        <div>
          <Slider {...settings}>
            <NFTSliderItem />
            <NFTSliderItem />
            <NFTSliderItem />
            <NFTSliderItem />
          </Slider>
        </div>
      </Wrapper>
    </Modal>
  );
};

export default NFTBarModal;
