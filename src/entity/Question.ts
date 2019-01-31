import { Category } from './Category';
import { Type } from './Type';
import { Level } from './Level';
import { Tag } from './Tag';
import { User } from './User';
import { Answer } from './Answer';

export class Question {
  id: string;
  category: Category;
  content: string;
  type: Type;
  level: Level;
  suggestion: string;
  tag: Tag;
  status: number;
  date_created: Date;
  user_id_created: User;
  listAnswer: Answer[];
}
