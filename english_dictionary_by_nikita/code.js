let get_eng_word = document.querySelector('.eng-word-translation-btn');
let eng_word =  document.querySelector('.eng-word');

const words = `1. ability - способность  
2. able - способный  
3. about - о, примерно  
4. above - выше  
5. absent - отсутствующий  
6. absolute - абсолютный  
7. accept - принимать  
8. according - согласно  
9. account - учет  
10. accurate - точный  
11. achieve - достигать  
12. acknowledge - признавать  
13. acquire - приобретать  
14. act - действие  
15. action - действие  
16. active - активный  
17. activity - деятельность  
18. actual - фактический  
19. add - добавлять  
20. addition - добавление  
21. address - адрес  
22. adjust - корректировать  
23. admit - признавать  
24. adult - взрослый  
25. advance - продвижение  
26. advantage - преимущество  
27. adventure - приключение  
28. advertise - рекламировать  
29. advice - совет  
30. advise - советовать  
31. affect - влиять  
32. afford - позволять себе  
33. afraid - испуганный  
34. age - возраст  
35. agency - агентство  
36. agent - агент  
37. agree - соглашаться  
38. agreement - соглашение  
39. ahead - впереди  
40. aim - цель  
41. air - воздух  
42. airport - аэропорт  
43. alarm - тревога  
44. alcohol - алкоголь  
45. all - все  
46. allergy - аллергия  
47. allow - позволять  
48. almost - почти  
49. alone - одинокий  
50. along - вдоль  
51. already - уже  
52. also - также  
53. alter - изменять  
54. alternative - альтернатива  
55. although - хотя  
56. always - всегда  
57. amazing - удивительный  
58. ambition - амбиция  
59. amount - сумма  
60. analysis - анализ  
61. analyze - анализировать  
62. ancient - древний  
63. and - и  
64. anger - злость  
65. animal - животное  
66. another - другой  
67. answer - ответ  
68. anyone - любой  
69. anything - что угодно  
70. anywhere - где угодно  
71. appear - появляться  
72. application - заявление  
73. apply - применять  
74. appoint - назначать  
75. appointment - встреча  
76. appreciate - ценить  
77. approach - подход  
78. approve - одобрять  
79. argue - спорить  
80. argument - спор  
81. arise - возникать  
82. arrangement - соглашение  
83. arrive - прибывать  
84. article - статья  
85. artist - художник  
86. artistic - артистичный  
87. ask - спрашивать  
88. aspect - аспект  
89. assess - оценивать  
90. assessment - оценка  
91. assist - помогать  
92. assistance - помощь  
93. assume - предполагать  
94. athlete - спортсмен  
95. athletic - атлетичный  
96. attach - прикреплять  
97. attempt - попытка  
98. attend - посещать  
99. attention - внимание  
100. attitude - отношение  
101. attorney - адвокат  
102. audience - аудитория  
103. author - автор  
104. authority - власть  
105. automatic - автоматический  
106. available - доступный  
107. average - средний  
108. avoid - избегать  
109. awake - бодрый  
110. award - награда  
111. aware - осведомленный  
112. awesome - потрясающий  
113. balance - баланс  
114. ball - мяч  
115. bank - банк  
116. bar - бар  
117. base - основа  
118. basic - основной  
119. basis - основа  
120. beach - пляж  
121. bear - нести  
122. beat - бить  
123. beauty - красота  
124. become - становиться  
125. bed - кровать  
126. before - перед  
127. begin - начинать  
128. behavior - поведение  
129. behind - позади  
130. believe - верить  
131. below - ниже  
132. benefit - польза  
133. beside - рядом  
134. best - лучший  
135. better - лучше  
136. between - между  
137. beyond - за пределами  
138. big - большой  
139. bill - счет  
140. bind - связывать  
141. biology - биология  
142. black - черный  
143. blame - винить  
144. blank - пустой  
145. blind - слепой  
146. block - блок  
147. blood - кровь  
148. blow - дуть  
149. blue - синий  
150. board - доска  
151. body - тело  
152. book - книга  
153. born - родиться  
154. borrow - брать в долг  
155. both - оба  
156. bother - беспокоить  
157. bottle - бутылка  
158. bottom - дно  
159. boundary - граница  
160. boy - мальчик  
161. brain - мозг  
162. brand - бренд  
163. break - ломать  
164. breathe - дышать  
165. breathe - вдыхать  
166. broad - широкий  
167. broken - сломанный  
168. brother - брат
169. budget - бюджет  
170. build - строить  
171. building - здание  
172. burn - гореть  
173. business - бизнес  
174. busy - занят  
175. call - звонить  
176. calm - спокойный  
177. camera - камера  
178. campaign - кампания  
179. can - мочь  
180. cancel - отменять  
181. cap - кепка  
182. capacity - вместимость  
183. capital - столица  
184. capture - запечатлеть  
185. car - машина  
186. card - карта  
187. care - заботиться  
188. career - карьера  
189. carry - нести  
190. case - случай  
191. cash - наличные  
192. cause - причина  
193. cell - клетка  
194. center - центр  
195. century - век  
196. certain - определенный  
197. certainly - безусловно  
198. chain - цепь  
199. chair - стул  
200. chance - шанс  
201. change - изменять  
202. channel - канал  
203. charge - заряд  
204. check - проверять  
205. choose - выбирать  
206. choice - выбор  
207. choose - выбирать  
208. choose - выбирать  
209. city - город  
210. claim - притязание  
211. class - класс  
212. clean - чистый  
213. clear - понятный  
214. climate - климат  
215. climb - взбираться  
216. clock - часы  
217. close - близко  
218. clothes - одежда  
219. cloud - облако  
220. club - клуб  
221. coach - тренер  
222. coast - берег  
223. coat - пальто  
224. code - код  
225. coffee - кофе  
226. cold - холодный  
227. collect - собирать  
228. color - цвет  
229. come - приходить  
230. comfort - комфорт  
231. committee - комитет  
232. common - общий  
233. communication - коммуникация  
234. community - сообщество  
235. company - компания  
236. compare - сравнивать  
237. compete - соревноваться  
238. complete - завершенный  
239. computer - компьютер  
240. concern - беспокойство  
241. conclude - заключать  
242. conclude - завершать  
243. condition - условие  
244. conduct - проводить  
245. conference - конференция  
246. confuse - путать  
247. connection - связь  
248. conscious - сознательный  
249. consequence - следствие  
250. consider - рассматривать  
251. contain - содержать  
252. continue - продолжать  
253. contract - контракт  
254. control - контроль  
255. convenience - удобство  
256. cook - готовить  
257. cool - крутой  
258. copy - копировать  
259. core - ядро  
260. corner - угол  
261. correct - правильный  
262. cost - стоимость  
263. could - мог  
264. country - страна  
265. couple - пара  
266. course - курс  
267. court - суд  
268. cover - покрывать  
269. create - создавать  
270. crime - преступление  
271. cultural - культурный  
272. culture - культура  
273. current - текущий  
274. customer - клиент  
275. cut - резать  
276. damage - ущерб  
277. danger - опасность  
278. dark - темный  
279. date - дата  
280. deal - сделка  
281. decide - решать  
282. decision - решение  
283. declare - заявлять  
284. degree - степень  
285. delay - задержка  
286. deliver - доставлять  
287. demand - требование  
288. deny - отрицать  
289. depend - зависеть  
290. describe - описывать  
291. design - дизайн  
292. desire - желание  
293. detail - деталь  
294. develop - развивать  
295. die - умирать  
296. difference - разница  
297. different - различный  
298. difficult - трудный  
299. direction - направление  
300. discover - открывать  
`




let words_as_list =  words.split("\n")

function get_word_by_index_as_list(i){
    let to_ret = words_as_list[i].split("-")
    to_ret[0]=to_ret[0].slice(to_ret[0].indexOf(".")+1,to_ret[0].length)
    return to_ret
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log(words_as_list)





console.log(get_eng_word);
console.log("вава");

function get_new_word(){
    a_word = get_word_by_index_as_list(getRandomInt(0,words_as_list.length))

    //console.log("fg");
    eng_word.textContent = a_word[0];
}

get_eng_word.addEventListener("click", get_new_word);