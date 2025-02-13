---
title: DTO
description: Data Transport Object 의 역할
date: 2015-05-28
tags: [design pattern]
---

## DTO 란

오늘 드디어 DTO 가 무엇인지 알았다. 그저 데이터 전달 만을 위한 pure data object 이다. 

다음과 같은 특징은 DTO 의 목적을 더 명확히 한다.
1. 이름, 주소 같이 좁은 의미의 데이터를 전달한다. 단순히 파라미터 매핑 객체와 목적이 완전히 다르다.
2. 로직은 고려하지 않는다. ```Equal()``` 도 필요없다. 데이터 전달만 하고 그 역할이 끝나기 때문이다.
3. 필드타입은 쉽게 serialize 가능한 타입으로만 이루어져야한다. 모듈 내부에서 쓰는 타입같은걸 쓰면 안된다. 외무 모듈과의 응집도가 커지기 때문이다.


흔히 묘사되는 시나리오는 DB 든 뭐든 하나의 큰 데이터 혹은 클래스가 있고 이걸 다른 곳에 전달해야 할 때이다. 전체 데이터를 모두 전달하면 네트워크를 탄다면 특히 부하가 심해진다. 그래서 팩토리 패턴으로 원본 데이터에서 쉽게 DTO 를 만들 수 있게 하여 사용한다.




### VO(Value Object)

덤으로 엮기는 것이 VO 인데, 이는 DTO 와 전혀 다른 개념이다.

대부분의 언어의 ```string``` 처럼 Equality 가 필드 값만 같으면 성립하는 객체를 말한다.

관심사가 필드 값이라면 주소 값이 다른 별개의 객체인지 아닌지는 전혀 관심이 없기 때문이다.




## 참고자료

[osgi](https://enroute.osgi.org/FAQ/420-dtos.html)

[so](https://stackoverflow.com/questions/8830957/is-a-data-transfer-object-the-same-as-a-value-object/8837737#8837737)