'use server';

export async function waContact(userId: string, formData: FormData) {
	
	const name = formData.get('name') as string
    const message = formData.get('message') as string    
	const address = formData.get('address') as string
	
	console.log('name : ', name)
}
