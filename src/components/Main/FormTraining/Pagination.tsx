import React from "react"
import { useSelector } from "react-redux"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import { IInitialState } from "../../../store/filterTrainingSlice"
import "./pagination.scss"

export interface IFilterTrainingSlice {
    filterTraining: IInitialState
}

interface IPaginationProp {
    paginationList: (
        e:
            | React.MouseEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>,
        countItems?: number
    ) => void
}

export default function Pagination({
    paginationList,
}: IPaginationProp): React.JSX.Element {
    const arrTraining = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.arrTraining
    )
    const activeId = useSelector(
        (state: IFilterTrainingSlice) => state.filterTraining.activeId
    )
    let count = arrTraining.length
    let notePage = 18
    let countItems = Math.ceil(count / notePage)
    const arr = Array.from({ length: countItems }, (_, i) => i + 1)
    return (
        <div className="pagination_block">
            <ul>
                {countItems >= 10 && (
                    <button
                        name="left"
                        onClick={(e) => paginationList(e)}
                        className="pagination_button"
                    >
                        <FiArrowLeft />
                    </button>
                )}

                {countItems === 1
                    ? ""
                    : arr.map((el, i) => {
                          return (
                              <li key={el}>
                                  <input
                                      id={el.toString()}
                                      className={`pagination_input ${
                                          activeId === el
                                              ? "pagination_active"
                                              : ""
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
                        className="pagination_button"
                    >
                        <FiArrowRight />
                    </button>
                )}
            </ul>
        </div>
    )
}
