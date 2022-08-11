// const deleteCards = async () => {
//         const token = await fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Authorization': `${localStorage.getItem("Authorization")}`
//             },
//         }).then(() => JSON.stringify(this.id));
//         if (token) {
//             localStorage.setItem("Authorization", `${localStorage.getItem("Authorization")}`);
//             this.cardWrapper.remove();
//         }
//     }
//
// export default deleteCards;