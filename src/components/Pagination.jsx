import style from './pagination.module.scss'

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
export default function Pagination({ paginationList, activeId, arrTraining }) {
    let count = arrTraining.length
    let notePage = 18
    let countItems = Math.ceil(count / notePage)
    const arr = Array.from({ length: countItems }, (_, i) => i + 1)
    return (
        <div className={style.paginationBlock}>
            <ul>
                {countItems >= 10 && (
                    <button name="left" onClick={(e) => paginationList(e)}>
                        <FiArrowLeft />
                    </button>
                )}

                {countItems === 1
                    ? ''
                    : arr.map((el, i) => {
                          return (
                              <li key={el}>
                                  <input
                                      id={el}
                                      className={`${style.input} ${
                                          activeId === el ? style.active : ''
                                      }`}
                                      type="button"
                                      onClick={(e) => paginationList(e)}
                                      value={el}
                                  />
                              </li>
                          )
                      })}
                {countItems >= 10 && (
                    <button
                        name="right"
                        onClick={(e) => paginationList(e, countItems)}
                    >
                        <FiArrowRight />
                    </button>
                )}
            </ul>
        </div>
    )
}
