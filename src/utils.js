const jwt = require("jsonwebtoken");
const APP_SECRET = "Graphql-is-awesome";

// トークンを復号するための関数
function getTokenPayload(token){
  // トークン化された物の前の情報(user.id)を復元する
  return jwt.verify(token, APP_SECRET);
}

// ユーザーIDを取得するための関数
function getUserId(req, authToken){
  if(req){
    // ヘッダーを確認し、認証権限があるかチェック。
    const authHeader = req.headers.authorization;
    // 権限がある場合
    if(authHeader){
      const token = authHeader.replace("Bearer", "");
      if(!token){
        throw new Error("トークンが見つかりませんでした");
      }
      // そのトークンを復号する
      const { userId } = getTokenPayload(token);
      return userId;
    }
  }else if(authToken){
    const { userId } = getTokenPayload(authToken);
    return userId;
  }
  throw new Error("認証権限がありません");
}

module.exports = {
  APP_SECRET,
  getUserId,
}