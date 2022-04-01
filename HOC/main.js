import ArticlesList from "./ArticleList";
import HOC from "./HOC";

const ArticlesListWithHOC = HOC(ArticlesList, (GlobalDataSource) => GlobalDataSource.getArticles());
const UserListWithHOC = HOC(UserList, (GlobalDataSource) => GlobalDataSource.getUsers());
