import React from "react";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./Checkbox";

function App() {
  const [agreed, setAgreed] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const [colors, setColors] = React.useState(["green"]);
  return (
    <div className="grid">
      <article>
        <header>
          <h3>체크박스</h3>
        </header>
        <Checkbox checked={agreed} onChange={setAgreed}>
          (필수) 서비스 이용약관
        </Checkbox>
        <Checkbox checked={marketing} onChange={setMarketing}>
          (선택) 마케팅 수신
        </Checkbox>
        <footer>
          <button disabled={!agreed}>회원 가입</button>
        </footer>
      </article>

      <article>
        <header>
          <h3>체크박스 그룹</h3>
        </header>
        <CheckboxGroup
          label="좋아하는 색깔은?"
          values={colors}
          onChange={setColors}
        >
          <Checkbox value="red">빨강</Checkbox>
          <Checkbox value="yellow">노랑</Checkbox>
          <Checkbox value="green">초록</Checkbox>
          <Checkbox value="blue">파랑</Checkbox>
          <Checkbox value="violet" disabled>
            보라
          </Checkbox>
        </CheckboxGroup>
        <footer>[{colors.join(",")}]을 좋아하시군요!</footer>
      </article>
    </div>
  );
}

export default App;
