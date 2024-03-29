import EditButton from "@/utils/EditButton"
import PreviousButton from "@/utils/PreviousButton"
import { EditOption } from "@/utils/types/editButton"
import Image from "next/image"
import { useSearchParams } from "next/navigation"


const SelectedDialog = () => {
    const id = useSearchParams().get('id');
    return (
        <section className={`${!id && 'hidden md:block'} w-full fixed md:static z-10 pl-4 flex items-center bg-bg-content dark:bg-dark-bg-content rounded-[20px] `}>
            {id ?
                <>
                    <Image
                        src={"/assets/profileIcon.png"}
                        alt={""}
                        width={32}
                        height={32}
                        style={{ borderRadius: '20px' }} />
                    <div className="flex w-full items-end">
                        <p className="ml-[12px] text-[16px] font-bold">Pinchedmon</p>
                        <p className="ml-[14px] text-[10px] md:text-[12px] text-gray-text mb-[2px] font-medium">
                            был в сети столько времени назад
                        </p>
                    </div>
                    <div className="p-3 flex flex-row-reverse">
                        <EditButton widthIcon={26} widthButton={38} fill={"#b5b5b5"} option={EditOption.DIALOG} />
                    </div>
                </>
                :
                <div></div>
            }


        </section>
    )
}

export default SelectedDialog