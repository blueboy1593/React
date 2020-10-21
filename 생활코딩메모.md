# 생활코딩 메모하기

index.js 에서 app.js와 index.html 로 통하는 것.

create-react-app을 했을 때 index.js 가 오히려 본체라고 생각하면 된다.

```zsh
npm run build
위의 명령어를 통해서 코드 내의 불필요한 부분을 삭제하고 배포할 수 있다.
```



react에서 state가 바뀌면 state가 들어가 있는 component들이 싹 호출이 되고, 그 하위에 속하는 연계된 component도 모두 콜이 된다.

함수를 사용하면 .bind로 묶어주는 것이 좋다.

state를 바꿀 때에는 setState() 함수를 사용해서 하자.



eventlistener 하는 것은 vue랑 비슷하지만 여기 부분은 확실히 어렵기는 하다.

Velaport 님도 칭찬하심.

## Props VS State

### Props

- read only
- cannot be modified

### State

- can be asynchronous
- setState로 바꿀 수 있다



## Redux devtools 설치

크롬 확장 프로그램에서 redux devtools를 설치하고 아래의 github 사이트에서 사용 방법을 익힌다.

https://github.com/zalmoxisus/redux-devtools-extension#installation