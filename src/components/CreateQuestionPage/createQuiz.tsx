import styles from "./createQuiz.module.scss";
import cx from "classnames";

const CreateQuizPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.headerContainer}>
          <div className={cx(styles.grid, styles.wide)}>
            <div className={styles.header}>
              <div className={styles.headerLogo}>
                <h1>LOGO</h1>
              </div>
              <div className={styles.containerBtn}>
                <button className={cx(styles.btn, styles.btnPreview)}>
                  Preview
                </button>
                <button className={cx(styles.btn, styles.btnExit)}>Exit</button>
                <button className={cx(styles.btn, styles.btnSave)}>Save</button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx(styles.grid, styles.wide)}>
          <div className={styles.container}>
            <div className={cx(styles.containerCreate, styles.ques)}>
              <input
                type="text"
                maxLength={120}
                placeholder="Start typing your question"
                className={styles.containerCreateInput}
              />
              <div className={styles.toolbar}>
                <button className={styles.toolbar_btn} aria-label="Bold">
                  B
                </button>
                <button className={styles.toolbar_btn} aria-label="Italic">
                  I
                </button>
                <button className={styles.toolbar_btn} aria-label="Subscript">
                  X<sub>2</sub>
                </button>
                <button className={styles.toolbar_btn} aria-label="Supersript">
                  X<sup>2</sup>
                </button>
                <button
                  className={styles.toolbar_btn}
                  aria-label="Symbol dialog"
                >
                  Ω
                </button>
                <button
                  className={styles.toolbar_btn}
                  aria-label="Math equation editor"
                >
                  f(x)
                </button>
              </div>
            </div>
            <div className={styles.containerAddImg}>
              <div className={styles.bgAddImg}>
                <div className={styles.boxAddImg}>
                  <button className={styles.btnAddImg}>
                    <i
                      className={cx(
                        styles.addImgIcon,
                        styles.fa_solid,
                        styles.fa_plus
                      )}
                    ></i>
                  </button>
                  <p>Find and insert media</p>
                </div>

                <div className={styles.boxEditImg}>
                  <button className={styles.btnEditImg}>
                    <i
                      className={cx(
                        styles.editIcon,
                        styles.fa_solid,
                        styles.fa_image
                      )}
                    ></i>
                  </button>
                  <button className={styles.btnEditImg}>
                    <i
                      className={cx(
                        styles.editIcon,
                        styles.fa_solid,
                        styles.fa_info
                      )}
                    ></i>
                  </button>
                  <button className={styles.btnEditImg}>
                    <i
                      className={cx(
                        styles.editIcon,
                        styles.fa_solid,
                        styles.fa_trash_can
                      )}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <div className={cx(styles.containerCreate, styles.ans)}>
              <div className={styles.boxCreateAns}>
                <span className={cx(styles.alphabet, styles.alphbatA)}>A</span>
                <input
                  type="text"
                  className={cx(styles.containerCreateInput, styles.inputAns)}
                  placeholder="Add answer 1"
                />
                <div
                  className={cx(
                    styles.toolbar__for_inputAns,
                    styles.ans1,
                    styles.borderRaTop
                  )}
                >
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    <i className={cx(styles.fa_regular, styles.fa_image)}></i>
                  </button>
                  <div className={styles.seperate}></div>
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    B
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Italic">
                    I
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Subscript">
                    X<sub>2</sub>
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Supersript"
                  >
                    X<sup>2</sup>
                  </button>
                  <div className={styles.seperate}></div>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Symbol dialog"
                  >
                    Ω
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Math equation editor"
                  >
                    f(x)
                  </button>
                </div>
              </div>
              <div className={styles.boxCreateAns}>
                <span className={cx(styles.alphabet, styles.alphabetB)}>B</span>
                <input
                  type="text"
                  className={cx(styles.containerCreateInput, styles.inputAns)}
                  placeholder="Add answer 2"
                />
                <div
                  className={cx(
                    styles.toolbar__for_inputAns,
                    styles.ans2,
                    styles.borderRaTop
                  )}
                >
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    <i className={cx(styles.fa_regular, styles.fa_image)}></i>
                  </button>
                  <div className={styles.seperate}></div>
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    B
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Italic">
                    I
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Subscript">
                    X<sub>2</sub>
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Supersript"
                  >
                    X<sup>2</sup>
                  </button>
                  <div className={styles.seperate}></div>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Symbol dialog"
                  >
                    Ω
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Math equation editor"
                  >
                    f(x)
                  </button>
                </div>
              </div>
              <div className={styles.boxCreateAns}>
                <span className={cx(styles.alphabet, styles.alphabetC)}>C</span>
                <input
                  type="text"
                  className={cx(styles.containerCreateInput, styles.inputAns)}
                  placeholder="Add answer 3"
                />
                <div
                  className={cx(
                    styles.toolbar__for_inputAns,
                    styles.ans3,
                    styles.borderRaBot
                  )}
                >
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    <i className={cx(styles.fa_regular, styles.fa_image)}></i>
                  </button>
                  <div className={styles.seperate}></div>
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    B
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Italic">
                    I
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Subscript">
                    X<sub>2</sub>
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Supersript"
                  >
                    X<sup>2</sup>
                  </button>
                  <div className={styles.seperate}></div>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Symbol dialog"
                  >
                    Ω
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Math equation editor"
                  >
                    f(x)
                  </button>
                </div>
              </div>
              <div className={styles.boxCreateAns}>
                <span className={cx(styles.alphabet, styles.alphabetD)}>D</span>
                <input
                  type="text"
                  className={cx(styles.containerCreateInput, styles.inputAns)}
                  placeholder="Add answer 4"
                />
                <div
                  className={cx(
                    styles.toolbar__for_inputAns,
                    styles.ans4,
                    styles.borderRaBot
                  )}
                >
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    <i className={cx(styles.fa_regular, styles.fa_image)}></i>
                  </button>
                  <div className={styles.seperate}></div>
                  <button className={styles.toolbar_btn} aria-label="Bold">
                    B
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Italic">
                    I
                  </button>
                  <button className={styles.toolbar_btn} aria-label="Subscript">
                    X<sub>2</sub>
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Supersript"
                  >
                    X<sup>2</sup>
                  </button>
                  <div className={styles.seperate}></div>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Symbol dialog"
                  >
                    Ω
                  </button>
                  <button
                    className={styles.toolbar_btn}
                    aria-label="Math equation editor"
                  >
                    f(x)
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.btnAddConatiner}>
              <a href="" className={cx(styles.btn, styles.btnAddAns)}>
                Add more question
              </a>
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </>
  );
};

export default CreateQuizPage;
