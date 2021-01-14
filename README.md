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
1. Header를 보열줄 App.js에 추가 
2. Components/Header.js 생성. 
3. Router.js에 Router import하고, route 추가.
```
<Router>
    <Switch>
        <Route>
        <Route>
    </Switch>
<Router>
```
4. Header에는 Movies / tv / Search  파트가 있다. 
# 라우팅, 라우터란? 
https://react-router.vlpt.us/1/
사용자가 어떤 주소로 들어 왔을 때 그 주소에 해당되는 적당한 페이지를 사용자에게 보내주는 것

# BrowseRouter 
리액트 라우터 돔을 적용하고 싶은 컴포넌트의 최상위의 컴포넌트를 감싸주는 wrapper 컴포넌트 
브라우저 라우터라는 컴포넌트로 App을 깜싸준다 
App은 브라우저 컴포넌트 안에서 사용할 수 있게 됨. 
```
 <BrowserRouter><App/> <BrowserRouter/>
 ```
# Route
url에 따라 달라져야 되는 컴포넌트로 감싸 주면 된다. 
```
<Route path='/'><Home></Home></Route>
<Route path='/topics'><Topics></Topics></Route>
<Route path='/contact'><Contact></Contact></Route>
```
 # 문제점. 
 /home으로 들어오면 Home 나오지만, /topics로 들어오면 Home페이지와, Topics 페이지가 같이 나옴. 
 /contact로 들어오면 Home페이지와 contact 페이지가 나옴. 왜냐하면 /에 걸리기 때문. 

 # 해결방법  'exact'
 ```
 <Route exact path='/'><Home></Home></Route>
<Route exact path='/topics'><Topics></Topics></Route>
<Route exact path='/contact'><Contact></Contact></Route>
```

# 만약 동일한 페스가 있으면 두번출력. => 동적 라우팅 
 ```
<Route exact path='/topics'><Topics></Topics></Route>
<Route exact path='/topics'><Topics></Topics></Route>
 ```

 # 다른방법 Switch 
 /에 exact를 거는 이유는 먼저 걸리는 것만 출력하기 때문에 밑에 있는 페스는 걸릴 수가 없음. 그래서 exact를 넣어서, 정확한 값이 들어오면 넘어가도록. 
 ```
 <Switch>
 <Route exact path='/'><Home></Home></Route>
<Route path='/topics'><Topics></Topics></Route>
<Route path='/contact'><Contact></Contact></Route>
 <Switch>
  ```

# 없는 페이지로 들어올 경우 hoho
 ```
 <Switch>
 <Route exact path='/'><Home></Home></Route>
<Route path='/topics'><Topics></Topics></Route>
<Route path='/contact'><Contact></Contact></Route>
<Route path = '/'>Not found<Route>
 <Switch>
 ```
# 맞는 Route가 없으면 /를 redirect 
  ```
<Redirect from="*" to="/"></Redirect>
 ```

# styled-components , styled-reset install 

# Router.js에 Header import하고, <Router> 안에 <Header/>를 넣어주어야함. 그렇지 않으면 에러뜸
# withRouter로 Header를 export default해야한다. 
그래야지 props를 가져올 수 있다. props는 objec으로 history, location, match가 들어있다. 여기서 현재 어디에 접속해있는지 알기 위해, location을 열어서 확인하고 그 안의 path를 추가해야함 








# 오류모음 
×
Error: Component(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
즉 App에 있는 컴포넌트가 값이 undfined였음. 그래서 뜸. 





