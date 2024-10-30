import  styles from './index.module.css';
import { Title, type p_Title } from './fundamental.tsx';

import type { ReactNode } from 'react';

export type Props = {
  list : Array<{
    date : Date,
    title : string,
    content : string | string[],
    link? : string,
  }>;

  title? : p_Title;
	children? : ReactNode;
} & Record<string, unknown>;

export function TimeLine({ title = { level : 3 }, list, className, children, ...attrs } : Props) {
  return (
    <ol className={`${styles['ol-timeline']} ${ className }`} {...attrs}>
      {list.map((e, i) => <li key={i} value={i} data-index={i}>
        <div className="dot" role="img"></div>
        <time dateTime={e.date.toISOString()}>{e.date.toLocaleString('es-pe', { month : 'long', year : 'numeric' })}</time>
        
        <Title className="title" level={title.level}>{e.title}</Title>
        
        <p className="content">{Array.isArray(e.content) ? e.content.flatMap(v => [v,<br/>]) : e.content }</p>
        {e.link && (
          <a href={e.link} target='_blank'  className="btn">ver más</a>
        )}
      </li>)}       
    </ol>
  )
}

