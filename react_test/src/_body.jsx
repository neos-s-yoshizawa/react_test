import React from 'react';
import Memo from './memo.jsx';

export default class Body extends React.Component {
  render() {
    return (
      <section>
        <p>ひたすらメモを追加していきます。リロードすると消えます。</p>
        <Memo />
      </section>
    );
  }
}
