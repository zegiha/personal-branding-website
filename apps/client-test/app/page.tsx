import styles from "./page.module.css";
import { RenderArticleContent, TypeArticleContent } from "notion-article-kit";

const articleContent = Array.from({length: 1}).map(() => [
  {
    "type": "headline2",
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "알고리즘"
      }
    ]
  },
  {
    "type": "numberedList",
    "children": [],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false,
          "backgroundColor": "var(--semantic-accent-translucent-blue)"
        },
        "content": "numbered list"
      }
    ]
  },
  {
    "type": "bulletedList",
    "children": [
      {
        "type": "bulletedList",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "1시간 40분"
          }
        ]
      }
    ],
    "richText": [
      {
        "link": "https://www.acmicpc.net/problem/16565",
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "16565"
      }
    ]
  },
  {
    "alt": "caption chan",
    "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/96c93cd8-092d-4dd1-9bef-8e377a471341/b0053b21-0c94-4547-92c2-43f4ad71a878/Screenshot_2025-09-28_at_3.04.07_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFPR6C6%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T045444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCID3IFvPN1uZ5QtBghBRT1xyQTAVZBACEUWcTi7cnCoQYAiB%2FhhscGZP23NQ0zHmC2rwGtU5xR7UMKvMzJ%2Fn9VdpFbir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMFvCikOL6nJlkfaioKtwDRHdaRM0e73d%2BWsNnVzpIsj36OofygGgIrdsKvSI%2BDEISnhuRAL5WistiY8Tn7ToZ7e5Fvb4dmRDxQLFwKXCm9WlwGXG5wf8rARHbn%2BV0UpDYTOQNoVnpuKCy0Eaa5eeSgrdM1DsbiGhLF5I2s51jrLw7FQ%2FbnBCMGdJQrAV5apvVj3FseDB5o3%2F4QohSEXHD7OOM3QwcX4zDGQFzf%2BiPPpOVQv5cHfuxS3CIzhLPl%2BCL0QZMAocorQyE1GMAdmzUlvZP6dRYj9glzMqCKhd%2Fa%2BtJkzXOrW4ZQ1yPAUzssp51NwBxmhBOwov8zJajoq5bhqlBAopR9ykGuCNmx3vy0653Wm9QdeyjpvezQm5jpKw5jKXa%2BzDUyKvebr9QHXu4Z9c4mvsQeuDnkBZ2QUaJA8GEBSK6mvkBfNUyZo%2F0%2FaanXqXwwi6Ytt%2BlPtuCVQBzok2hxxrpKVXlYNUoC9sKocdCmZmaCNmPPdQSqhTElJUbt0Vfj4suZm1HYPnkhT1CAZBNZ1uj3WV4YQE4NHWeuUCGMwtGFbKtqiSBvfnTC%2FTpYiGg8UkET16m22bm%2By97S7wwTNnm6JceZxP%2FeqEQcOM5bRM%2BQKQ%2FuhWnLcMWSaf2vYrlhDgxSuN05YUw3Y3QyAY6pgFVpSoJzaaf6vOwYzYmUOqZOsFXOOFnrmXwWpa4lJiqWT1PPXAFeI8tGPVzUZiGz67zAjRyZzGZ5e7PCO8hHkQFtCm2oC3O8uRwfd1YRF6wKiFEUsuPGAZ9zHYytV7xAR%2B%2BESmeNuVMuiounSDsyUs7DFZrfZqPGRqiWeceN8pSkax%2FdNcL2pPvtfDQm4UXaAAaAMtMqH3lQ9G01%2FjxSVJl2kljer15&X-Amz-Signature=50603e92572f500a2360f6ef88a4efb5307e023be5012bad84acf76351af7731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "type": "image",
    "width": 0,
    "height": 0,
    "caption": "caption chan"
  },
  {
    "alt": "",
    "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/96c93cd8-092d-4dd1-9bef-8e377a471341/3d07bad2-ff05-41fb-a607-3e755adfcc78/Screenshot_2025-09-28_at_3.32.04_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFPR6C6%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T045444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCID3IFvPN1uZ5QtBghBRT1xyQTAVZBACEUWcTi7cnCoQYAiB%2FhhscGZP23NQ0zHmC2rwGtU5xR7UMKvMzJ%2Fn9VdpFbir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMFvCikOL6nJlkfaioKtwDRHdaRM0e73d%2BWsNnVzpIsj36OofygGgIrdsKvSI%2BDEISnhuRAL5WistiY8Tn7ToZ7e5Fvb4dmRDxQLFwKXCm9WlwGXG5wf8rARHbn%2BV0UpDYTOQNoVnpuKCy0Eaa5eeSgrdM1DsbiGhLF5I2s51jrLw7FQ%2FbnBCMGdJQrAV5apvVj3FseDB5o3%2F4QohSEXHD7OOM3QwcX4zDGQFzf%2BiPPpOVQv5cHfuxS3CIzhLPl%2BCL0QZMAocorQyE1GMAdmzUlvZP6dRYj9glzMqCKhd%2Fa%2BtJkzXOrW4ZQ1yPAUzssp51NwBxmhBOwov8zJajoq5bhqlBAopR9ykGuCNmx3vy0653Wm9QdeyjpvezQm5jpKw5jKXa%2BzDUyKvebr9QHXu4Z9c4mvsQeuDnkBZ2QUaJA8GEBSK6mvkBfNUyZo%2F0%2FaanXqXwwi6Ytt%2BlPtuCVQBzok2hxxrpKVXlYNUoC9sKocdCmZmaCNmPPdQSqhTElJUbt0Vfj4suZm1HYPnkhT1CAZBNZ1uj3WV4YQE4NHWeuUCGMwtGFbKtqiSBvfnTC%2FTpYiGg8UkET16m22bm%2By97S7wwTNnm6JceZxP%2FeqEQcOM5bRM%2BQKQ%2FuhWnLcMWSaf2vYrlhDgxSuN05YUw3Y3QyAY6pgFVpSoJzaaf6vOwYzYmUOqZOsFXOOFnrmXwWpa4lJiqWT1PPXAFeI8tGPVzUZiGz67zAjRyZzGZ5e7PCO8hHkQFtCm2oC3O8uRwfd1YRF6wKiFEUsuPGAZ9zHYytV7xAR%2B%2BESmeNuVMuiounSDsyUs7DFZrfZqPGRqiWeceN8pSkax%2FdNcL2pPvtfDQm4UXaAAaAMtMqH3lQ9G01%2FjxSVJl2kljer15&X-Amz-Signature=9fc39a9957302ef3677f593eadd3ccac83beb38d0bfe0fee915e39a981d2b4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "type": "image",
    "width": 0,
    "height": 0
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "url": "https://www.youtube.com/embed/CUUqmSPWiVg",
    "type": "video",
    "format": "youtube",
    "caption": "caption chan"
  },
  {
    "url": "https://v1.pinimg.com/videos/mc/720p/60/7a/8b/607a8b512ee7c3ed2596953909689708.mp4",
    "type": "video",
    "format": "file"
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "alt": "",
    "url": "https://i.pinimg.com/736x/b9/dc/53/b9dc53c0462ae32ba6f3950cf5182284.jpg",
    "type": "image",
    "width": 0,
    "height": 0
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "alt": "",
    "url": "https://i.pinimg.com/736x/b9/dc/53/b9dc53c0462ae32ba6f3950cf5182284.jpg",
    "type": "image",
    "width": 0,
    "height": 0
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "bulletedList",
    "children": [],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "수학, 조합론, 포함 배제 원리, DP"
      }
    ]
  },
  {
    "type": "bulletedList",
    "children": [
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "N개의 카드를 뽑아 포카드를 만드는 조합을 구하는 것이 문제의 해결법이다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "이 때 순열과 같이 4 이상 부터의 조합에 대해 "
          },
          {
            "type": "equation",
            "content": "13 * {}_{48}P_{N-4}"
          },
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "와 같은 식으로 한다면, 조합이 아닌 순열, 즉 "
          },
          {
            "type": "equation",
            "content": "FourCard*Others"
          },
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "와 "
          },
          {
            "type": "equation",
            "content": "Others * FourCard"
          },
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": " 둘 다 정답 값에 포함되기 때문에 답이 되지 못했다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "위의 해결법을 도출하고, 순열과 조합에 대한 이해도로 풀이가 막혀서 답을 찾아봤다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "이 문제에서는 순열을 이용하면 위와 같은 문제로 인해 풀이가 성립하지 못하고, 조합을 이용해야 한다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "포카드를 t개 가진 모든 조합의 값을 더하면, 중복된 값이 들어간다. 이전의 포카드 조합의 경우 또한 포함되기 때문이다. 그림으로 표현하면 아래와 같다."
          }
        ]
      },
      {
        "alt": "",
        "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/96c93cd8-092d-4dd1-9bef-8e377a471341/42b0ffab-7e50-4d1f-96b2-8568ccf88e81/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCZQYNV%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T045445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAoJ50DXj7O72aIDS1mSnd6qqRDIOloQHvMamyp6h2Z5AiAz7%2BXugEsh1ZpOGlTwaLUS7GJVbEUxxdEVpwtMlhbTnCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMo2lxLEeEMfeNSJXvKtwD5flebjpDySGz8PVJ87zJpO53P6wPYHcq8S2cV51GT62vXV2H83L%2B3palJRAJJgFOKUMQpSaTUg1ciH%2Bx7NPCP3metX%2ByRFfZ48hMK8lhejIRXix67gvmh02BR4h4JqxzAcoSfRZ8mh0T6y3MTYwzXl8svPobrgeEZLQJHuTn3Uvx5sXFm%2F%2FSv7z%2BnL1utgWOj7BjKBb4FE0jnO0wOied6H%2FMZmE8Ok48q2f4pNQNJDZ6GfQGJB9BVw1c9ZDYPKvh4cySpwyjuf3wXxf6ktWs3%2B6nN8klxZjDYyZh24dQawon1b4IpW0RqspyqhChMfiARHOUovMSq6xTs9rukWHQcM4BvdeDygBXHYWuP%2F8IwgUPj%2BUZk%2B%2FpIg%2F8AJO2MCUuiXJZbOWOC7djJiCVC5iLIOaqELQskUun3SUk%2BxntDI66EVZQVbif7wqsfkFgZe0quSjrLfZGIpoR47W0hOqImJ1q9cxQeq1vpiPdQsQmXi5eoXubKojQbLEEKNmqZhnerKR7DPq6QwDeUoipv2ljSwa5r8DdyjgpA9CKo8PjVhJWepXdcuqgREF1Loudcfa9lCI5XtjAC%2FEKM3JaPT2KvE33HAVbSbXKPd2ZURGpCmAbyVL2Sl5vlO0LTjwwyIzQyAY6pgFalstAn2IDg61t2ma090QpX18wozjirF2DICJxp00ygNvKcjLl74k7QMo2PPV52NVuIHUJqPpL8tixjZNnmCgn6QOLHl85%2BHFMRF90a6zNaqKhHUHOJqkYM7vACfpxBujJGSmiKb3jpXy7F1yUHqLa1hvUZHQGlZdoAZPAefriBDtIl%2Ff3pzwUOd5kye1paDm%2FzbLVanXsy0rd2O0khCs2OjyJ%2F3D5&X-Amz-Signature=9398bed395520b88795aa941dbabcbd356361cd3b1de7baf1b2a9d57e9b44d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        "type": "image",
        "width": 0,
        "height": 0
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "그렇기에 중복된 조합을 제거해야하는데, 이는 포함 배제의 원리를 이용해 해결한다.\n위와 같은 집합 A, B, C가 있을 때 이들끼리의 합집합은 "
          },
          {
            "type": "equation",
            "content": "|A∪B∪C|=|A|+|B|+|C|−|A∩B|−|B∩C|−|A∩C|+|A∩B∩C|"
          },
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "이고, 이를 일반화하면 아래와 같다."
          }
        ]
      },
      {
        "type": "quote",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": true,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "가능한 교집합들을 모두 살펴보면서 교집합을 이루는 집합의 수가 홀수이면 더해주고, 짝수이면 빼주면 된다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "이제 문제를 추상화해서 조합 및 포함배제 원리에 맞게 말해보면 포카드를 N/4개 가진 집합이 있고, 이에 대한 모든 합집합을 구하면 된다. 이때 포함배제의 원리에 의해 집합 번호 i가 짝수이면, 값을 빼고, 아니면 더한다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "이제 각 조합을 구해서 위에서 도출한 원리로 코드를 작성하면 되는데, 모든 연산에 대해서 조합 값을 구하면 많은 팩토리얼 연산이 필요하기에 조합의 특징 중 하나인 "
          },
          {
            "type": "equation",
            "content": "{}_{i}{C}_{j} = {}_{i-1}C_{j} + {}_{i-1}C_{j-1}"
          },
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "이라는 원리를 이용한다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          {
            "type": "quote",
            "children": [],
            "richText": [
              {
                "type": "text",
                "style": {
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "strikethrough": false
                },
                "content": "의미: iCj는 i개 중 j개를 고르는 방법 수.\n• i개의 원소 중 특정 원소 x를 하나 지정하자.\n• j개 부분집합을 x를 포함하는 경우와 포함하지 않는 경우로 분할한다.\n▫ x를 포함하지 않는 경우: 나머지 i-1개 중 j개를 고름 → (i-1)Cj\n▫ x를 포함하는 경우: x를 이미 선택했으니 나머지 i-1개 중 j-1개를 고름 → (i-1)C(j-1)\n• 두 경우는 서로 배타적이며 전체를 포괄하므로\niCj = (i-1)Cj + (i-1)C(j-1)"
              }
            ]
          }
        ],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "이 원리가  왜 성립하는지 간략하게 논리로 따져보면 아래와 같다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "고로 모든 조합에 대해 "
          },
          {
            "type": "equation",
            "content": "comb[i][j] = comb[i-1][j] + comb[i-1][j-1]"
          },
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "로 메모이제이션할 수 있다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "최종적으로 위 메모이제이션 기법을 적용해 포함배제의 원리를 이용한 코드를 작성해 문제를 해결할 수 있다."
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "나는 낭만 취업파이기에 수학은 맹꽁이라 마이 어려웠기에 코드를 남긴다."
          }
        ]
      },
      {
        "text": "#include <iostream>\n\n#define MOD 10007\n\nusing namespace std;\n\nint comb[53][53], n, ans;\n\nint main() {\n  for(int i = 0; i < 53; i++) comb[i][0] = 1;\n  for(int i = 1; i < 53; i++) {\n    for(int j = 1; j < 53; j++) {\n      comb[i][j] = (comb[i-1][j] + comb[i-1][j-1]) % MOD;\n    }\n  }\n\n  cin >> n;\n\n  for(int i = 1; i <= 13 && n-4*i >= 0; i++) {\n    if(i % 2) ans = (ans + comb[52-4*i][n-4*i] * comb[13][i]) % MOD;\n    else ans = (ans - (comb[52-4*i][n-4*i] * comb[13][i]) % MOD + MOD) % MOD;\n  }\n\n  cout << ans << '\\n';\n}",
        "type": "code",
        "language": "c++"
      }
    ],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "DP는 조합의 원리를 이용해 사용되는 조합을 저장해 연산 수를 줄이는 것이고, 이외의 알고리즘적 원리는 없다."
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "numberedList",
    "children": [
      {
        "type": "numberedList",
        "children": [
          {
            "type": "numberedList",
            "children": [
              {
                "type": "numberedList",
                "children": [
                  {
                    "type": "numberedList",
                    "children": [
                      {
                        "type": "numberedList",
                        "children": [],
                        "richText": [
                          {
                            "type": "text",
                            "style": {
                              "bold": false,
                              "italic": false,
                              "underline": false,
                              "strikethrough": false
                            },
                            "content": "asd"
                          }
                        ]
                      }
                    ],
                    "richText": [
                      {
                        "type": "text",
                        "style": {
                          "bold": false,
                          "italic": false,
                          "underline": false,
                          "strikethrough": false
                        },
                        "content": "asd"
                      }
                    ]
                  }
                ],
                "richText": [
                  {
                    "type": "text",
                    "style": {
                      "bold": false,
                      "italic": false,
                      "underline": false,
                      "strikethrough": false
                    },
                    "content": "asd"
                  }
                ]
              }
            ],
            "richText": [
              {
                "type": "text",
                "style": {
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "strikethrough": false
                },
                "content": "asd"
              }
            ]
          }
        ],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "asd"
          }
        ]
      }
    ],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "asd"
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "numberedList",
    "children": [
      {
        "type": "numberedList",
        "children": [
          {
            "type": "numberedList",
            "children": [
              {
                "type": "numberedList",
                "children": [
                  {
                    "type": "numberedList",
                    "children": [],
                    "richText": [
                      {
                        "type": "text",
                        "style": {
                          "bold": false,
                          "italic": false,
                          "underline": false,
                          "strikethrough": false
                        },
                        "content": "asd"
                      }
                    ]
                  }
                ],
                "richText": [
                  {
                    "type": "text",
                    "style": {
                      "bold": false,
                      "italic": false,
                      "underline": false,
                      "strikethrough": false
                    },
                    "content": "asd"
                  }
                ]
              }
            ],
            "richText": [
              {
                "type": "text",
                "style": {
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "strikethrough": false
                },
                "content": "asd"
              }
            ]
          }
        ],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "asd"
          }
        ]
      }
    ],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "asd"
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "numberedList",
    "children": [
      {
        "type": "numberedList",
        "children": [
          {
            "type": "numberedList",
            "children": [
              {
                "type": "numberedList",
                "children": [
                  {
                    "type": "numberedList",
                    "children": [
                      {
                        "type": "numberedList",
                        "children": [],
                        "richText": [
                          {
                            "type": "text",
                            "style": {
                              "bold": false,
                              "italic": false,
                              "underline": false,
                              "strikethrough": false
                            },
                            "content": "asdsad"
                          }
                        ]
                      }
                    ],
                    "richText": [
                      {
                        "type": "text",
                        "style": {
                          "bold": false,
                          "italic": false,
                          "underline": false,
                          "strikethrough": false
                        },
                        "content": "asd"
                      }
                    ]
                  }
                ],
                "richText": [
                  {
                    "type": "text",
                    "style": {
                      "bold": false,
                      "italic": false,
                      "underline": false,
                      "strikethrough": false
                    },
                    "content": "asd"
                  }
                ]
              }
            ],
            "richText": [
              {
                "type": "text",
                "style": {
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "strikethrough": false
                },
                "content": "asd"
              }
            ]
          }
        ],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "asd"
          }
        ]
      }
    ],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "asdsad"
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "paragraph",
                    "children": [
                      {
                        "type": "paragraph",
                        "children": [],
                        "richText": [
                          {
                            "type": "text",
                            "style": {
                              "bold": false,
                              "italic": false,
                              "underline": false,
                              "strikethrough": false
                            },
                            "content": "asdasd"
                          }
                        ]
                      },
                      {
                        "type": "paragraph",
                        "children": [],
                        "richText": []
                      },
                      {
                        "type": "paragraph",
                        "children": [],
                        "richText": []
                      },
                      {
                        "type": "paragraph",
                        "children": [],
                        "richText": []
                      },
                      {
                        "type": "paragraph",
                        "children": [],
                        "richText": []
                      },
                      {
                        "type": "paragraph",
                        "children": [],
                        "richText": []
                      }
                    ],
                    "richText": [
                      {
                        "type": "text",
                        "style": {
                          "bold": false,
                          "italic": false,
                          "underline": false,
                          "strikethrough": false
                        },
                        "content": "asdad"
                      }
                    ]
                  }
                ],
                "richText": [
                  {
                    "type": "text",
                    "style": {
                      "bold": false,
                      "italic": false,
                      "underline": false,
                      "strikethrough": false
                    },
                    "content": "asdasd"
                  }
                ]
              }
            ],
            "richText": [
              {
                "type": "text",
                "style": {
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "strikethrough": false
                },
                "content": "asdasd"
              }
            ]
          }
        ],
        "richText": [
          {
            "type": "text",
            "style": {
              "bold": false,
              "italic": false,
              "underline": false,
              "strikethrough": false
            },
            "content": "asdads"
          }
        ]
      }
    ],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        },
        "content": "asdasd"
      }
    ]
  },
  {
    "type": "headline1",
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": true,
          "underline": false,
          "strikethrough": false,
          "backgroundColor": "var(--semantic-accent-translucent-green)"
        },
        "content": "asd"
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": [
      {
        "type": "text",
        "style": {
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false,
          "backgroundColor": "var(--semantic-accent-translucent-yellow)"
        },
        "content": "asd"
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  },
  {
    "type": "paragraph",
    "children": [],
    "richText": []
  }
]).flat()


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RenderArticleContent contents={articleContent as Array<TypeArticleContent | undefined>} />
      </div>
    </div>
  );
}
