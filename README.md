# how to install 
yarn global add npx  
npx create-react-app Moving
최신의 것을 쓰려고. 

# .env
1. NODE_PATH =src 설정

# yarn add prop-types 설치

# Components 파일 세팅, Routes 파일 세팅. 
Routes 파일에는 Home, Search, Detail, TV.js 추가 
export default () => "네임" 추가  //여기서는 글자값을 리턴하는 것. 

# 모듈로 불러올때 안될때, jsconfig.json파일 추가. 
{
    "compilerOptions": {
        "baseUrl": "src"
    }
}
# yarn add react-router-dom 다운
Components에 Router.js 추가. => 브라우저에게 홈이 어딘지 말해주려고!

# App.js에 <Router/> 추가해야함. 그래야 동작. 

# Header 컴포넌트 추가 










# 오류모음 
×
Error: Component(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
즉 App에 있는 컴포넌트가 값이 undfined였음. 그래서 뜸. 





