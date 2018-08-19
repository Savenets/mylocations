import React from 'react';
import PropTypes from 'prop-types';

import { googleMapsEmbedUrl } from '../../constants/googleMapsURLs';
import googleMapsKey from '../../constants/googleMapsKeys';

const formatQueryString = data => (
  Object.keys(data).map(function(key) {
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(data[key]);
  }).join('&')
);

const GoogleMapsEmbed = ({ address, styles }) => {

  const params = formatQueryString({
    q: address,
  });

  const googleMapURl = googleMapsEmbedUrl + googleMapsKey+'&'+params;

  const mapStyles = {
    border: 0,
    width: '100%',
    height: '100%,',
    ...styles,
  };

  return (
    <iframe
      title="Address"
      width="1000"
      height="1000"
      frameBorder="0"
      style={mapStyles}
      src={googleMapURl}
      allowFullScreen
    />
  );
};

GoogleMapsEmbed.defaultProps = {
  styles: null,
};

GoogleMapsEmbed.propTypes = {
  address: PropTypes.string.isRequired,
  styles: PropTypes.shape({}),
};

export default GoogleMapsEmbed;
