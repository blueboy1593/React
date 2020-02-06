from haversine import haversine

multicampus = (37.510348799999996, 127.029248)
gangnam = (37.497175,127.027926) # 강남역 위도 경도
kyobo = (37.504030, 127.024099) # 교보 문고 위도/경도

distance = haversine(multicampus, gangnam) * 1000
print(distance)