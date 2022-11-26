# Udemyの以下の講座を題材にGraphQLについて学習しました!
[【GraphQL入門】RESTに代わるモダンAPIのGraphQLでニュースアプリAPIを構築しながら基礎を学ぶ入門講座
](https://www.udemy.com/course/graphql-tutorial-with-newsapp-api/)

## GraphQLって何？
- GraphQL = APIのクエリ言語

### APIとは？
- クライアントとサーバーを仲介する役割
- お客さん(クライアント)からの注文をウエイター(API)が厨房(サーバー)に伝え、できあがった料理をウエイター(API)がお客さん(クライアント)に持っていく

### クエリ言語とは？
- 問い合わせを意味する
- お客さん(クライアント)が「ハンバーグください」という注文(クエリ)を投げる

### つまりGraphQLとは？
- APIへ問い合わせする際に使われるもの。

## GraphQLとREST APIの違いは？
- 現場では「APIを叩く」と表現する

### REST API：APIの叩き方
- エンドポイントを指定してデータを取得する(/students, /courses, /instructors)
- エンドポイント単位でデータを取得するため、余計な情報まで取れてしまう

### GraphQL：APIの叩き方
- students/courses/instructorsが全てGraphQLに集約されるため、その中から欲しいデータだけを取得する

### GraphQLのメリット
- 1つのエンドポイントで済む
- 余計なデータを取得せずに済む
- 型指定でデータが明確になる

## Apolloって何？
- GraphQLのフロント・バックエンドライブラリ
- クライアント側でもサーバー側でもApolloが用いられる

## Mutationとは？
|  | SQL/REST | GraphQL |
| ---- |  -------- | ------- |
| 取得 | SELECT | Query |
| 登録 | INSERT | Mutation |
| 更新 | UPDATE | Mutation |
| 削除 | DELETE | Mutation |

# Prismaとは？
- 次世代オープンソースORM
- ORM(Object Relational Mapping) ≒ RDB(Relational Data Base)
- SQLを知らなくてもRDBを操作できるオープンソースのサービス
- SQL知らんでもRDB触れるよ

### Prismaの立ち位置
- クライアント側からのqueryに応じてDBと接続してサーバー側からデータを返す