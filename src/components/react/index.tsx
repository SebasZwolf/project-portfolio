import { createElement as h, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.css"

export * from './fundamental.tsx';

import { Title, type p_Title, type p_base } from './fundamental.tsx';

type p_TimeLine = {
  list : Array<{
    date : Date,
    title : string,
    content : string | string[],
    link? : string,
  }>;

  title? : p_Title;
} & p_base;

export function TimeLine({ title = { level : 3 }, list, className, children, ...attrs } : p_TimeLine) {
  return (
    <ol className={`${styles['ol-timeline']} ${ className }`} {...attrs}>
      {list.map((e, i) => <li key={i} value={i} data-index={i}>
        <div className="dot" role="img"></div>
        <time dateTime={e.date.toISOString()}>{e.date.toLocaleString('es-pe', { month : 'long', year : 'numeric' })}</time>
        <Title className="title" level={title.level}>{e.title}</Title>
        
        <p className="content">{Array.isArray(e.content) ? e.content.flatMap(v => [v,<br/>]) : e.content }</p>
        {e.link && (
          <a href={e.link} className="btn">ver más</a>
        )}
      </li>)}       
    </ol>
  )
}

