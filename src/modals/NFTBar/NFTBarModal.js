import * as React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Slider from 'react-slick';

// Components
import NFTSliderItem from '../../components/NFTSliderItem';
import SliderArrow from '../../components/SliderArrow';

// Data
import cards from './cards';

// Styles
import {
  Wrapper,
  Title,
  CloseIcon,
  Carousel,
  CancelButton,
  CancelButtonTitle,
} from './styles';

const NFTBarModal = (props) => {
  const { open, onCloseModal } = props;

  const NextArrow = ({ onClick }) => (
    <SliderArrow direction="right" onClick={onClick} />
  );

  const PrevArrow = ({ onClick }) => (
    <SliderArrow direction="left" onClick={onClick} />
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
        <Carousel>
          <Slider {...settings}>
            {cards.map((card) => {
              const { tokenId, cover } = card;

              return (
                <NFTSliderItem key={tokenId} tokenId={tokenId} cover={cover} />
              );
            })}
          </Slider>
        </Carousel>
        <CancelButton onClick={onCloseModal}>
          <CancelButtonTitle>Cancel</CancelButtonTitle>
        </CancelButton>
      </Wrapper>
    </Modal>
  );
};

export default NFTBarModal;
