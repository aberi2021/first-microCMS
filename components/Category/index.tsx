import type { Category } from '@/libs/microcms';
import styles from './index.module.css';

type Props = {
  category: Category;
};

// トップページニュースに表示されるカテゴリーの表示
// export default function Category({ category }: Props) {
//   return <span className={styles.tag}>カテゴリー</span>;
// }

// 以下がもともとの記述だが、{category.name}にエラーがでる
export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
