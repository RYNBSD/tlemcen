import React from 'react'

interface MetaInterface {
  name: string,
  content: string,
  key: string,
};

const Meta = ({ name, content, key }:MetaInterface):JSX.Element => (
  <meta name={name} content={content} key={key} />
);

export default Meta