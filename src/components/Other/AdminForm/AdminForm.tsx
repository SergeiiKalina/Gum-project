import { JSX } from "react"
import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { DataFormExerciseContext, iDateForm } from "../../layouts/Context"
import "./adminForm.module.scss"

export default function AdminForm(): JSX.Element {
    const { register, handleSubmit } = useForm<iDateForm>()
    const { onWriteData }: any = useContext(DataFormExerciseContext)
    const onSubmit: SubmitHandler<iDateForm> = (data: iDateForm) => {
        onWriteData(data)
    }

    return (
        <form
            onChange={() => handleSubmit(onSubmit)}
            className="admin_form_form"
        >
            <label className="admin_form_label_input">
                Name <input type="text" {...register("title")} />
            </label>
            <label className="admin_form_label_input">
                Id <input type="text" {...register("id")} />
            </label>
            <label className="admin_form_label_input">
                Video <input type="text" {...register("video")} />
            </label>
            <label className="admin_form_label_input">
                Image <input type="text" {...register("image")} />
            </label>
            <label className="admin_form_label_select">
                Category
                <select {...register("category")}>
                    <option>anterior delta</option>
                    <option>middle delta</option>
                    <option>posterior delta</option>
                    <option>bicep </option>
                    <option>triceps</option>
                    <option>forearm muscle</option>
                    <option>back</option>
                    <option>lumbar muscle</option>
                    <option>press</option>
                    <option>biceps femoris </option>
                    <option>quadriceps</option>
                    <option>calf muscle</option>
                    <option>gluteus maximus</option>
                    <option>abductor muscles</option>
                    <option>adductor muscle</option>
                    <option>core</option>
                </select>
            </label>
            <label className="admin_form_label_select">
                Fitness Level
                <select {...register("fitnessLevel")}>
                    <option>low</option>
                    <option>middle</option>
                    <option>hight</option>
                </select>
            </label>
            <label className="admin_form_label_select">
                LFC
                <select {...register("LFC")}>
                    <option>true</option>
                    <option>false</option>
                </select>
            </label>
            <label className="admin_form_label_select">
                Sex
                <select {...register("sex")}>
                    <option>female</option>
                    <option>male</option>
                    <option>unsex</option>
                </select>
            </label>
            <label className="admin_form_label_select">
                Basic
                <select {...register("basicExercise")}>
                    <option>true</option>
                    <option>false</option>
                </select>
            </label>
            <button>Write Exercise</button>
        </form>
    )
}
