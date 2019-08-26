import React, { useState } from 'react';
import styles from './index.less';
import style_test from './test.styl';

import Example from './test'

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={style_test.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <Example></Example>
    </div>
  );
}
