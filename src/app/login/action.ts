"use server";

export async function handleSubmit(prevState: unknown, formData: FormData) {
    return {
        data: {
            prev: prevState,
            email: formData.get("email"),
            password: formData.get("password"),
        },
    };
}
