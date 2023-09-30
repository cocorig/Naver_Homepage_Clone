
1.초반 틀 잡기 세로 -> 가로
1-1 가운데 정렬

2.검색창
form과 같이 사용하면 좋은 점 ->
input에서 enter를 쳤을 때 자동으로 검색 결과 페이지로 넘어간다.
input만 단독으로 사용 시 enter를 쳤을 때 자동으로  넘어가지 않는다

header의 자식 요소들이 position: absolute이기 때문에 부모 영역에서 벗어나있다.
부모가 자식의 width, heigth를 포함하지 못함-> 높이계산만 따지면 자식 요소가 없는 거와 마찬가지 때문에 header에 높이 값 지정

form-> 블록 레벨, margin없앤다.

input이 인라인 요소이기 때문에 text의 baseline기준으로 정렬된다.
이 문제를 해결하기 위해  a태그에  vertical-align: middle; 주는 방법,
inline-flex로 바꿔주는 방법



:focus-within
- 요소를 포커스 했을 때, 요소 혹은 요소의 부모에서 해당 선택자를 사용


ntn-of-type() 과 ntn-child() 차이점

ntn-of-type()는 중간에 다른 태그가 와도 카운트 안 함

ntn-child()는 중간에 형제 태그가 있으면 카운트를 해버린다.
서로 다른 태그들을 구별하지 않는다.

```html
<!-- ntn-child(1)-->
  <li>
    <a class="nav-mail" href="#"><span>메일</span></a>
  </li>

<!-- ntn-child(2) -->
  <li>
    <a class="nav-cafe" href="#"><span>카페</span></a>
  </li>
  <!-- 다른 태그도 카운트함 ntn-child(3)-->
  <div>형제태그</div>
  <!-- ntn-child(4) -->
  <li>
    <a class="nav-blog" href="#"><span>블로그</span></a>
  </li>
```


ntn-of-type()는 중간에 다른 태그가 와도 카운트 안 함
ntn-of-type()사용 권장을 권장.



```html
<!-- ntn-child(1)-->
  <li>
    <a class="nav-mail" href="#"><span>메일</span></a>
  </li>

<!-- ntn-child(2) -->
  <li>
    <a class="nav-cafe" href="#"><span>카페</span></a>
  </li>
  <!-- 다른 태그 카운트 안함-->
  <div>형제태그</div>
  <!-- ntn-child(3) -->
  <li>
    <a class="nav-blog" href="#"><span>블로그</span></a>
  </li>
```
