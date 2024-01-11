import NotificationsButton from '@/widgets/main/NotificationsButton'
import PostsBar from '@/widgets/main/PostsBar'
import SearchBar from '@/widgets/main/Searchbar'
import MobileSidebar from '@/widgets/MobileSidebar'
import Sidebar from '@/widgets/Sidebar/Sidebar'


const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <main className='w-screen h-screen flex justify-center overflow-auto bg-light-bg dark:bg-dark-bg  '>
            <div className='flex-col md:flex-row relative flex w-[1440px]  '>
                <Sidebar />

                <div className='flex  w-full'>
                    <div className='w-full flex flex-col'>
                        <div className='flex z-50 sticky top-[30px] mt-[30px] justify-between'>
                            <SearchBar />
                            <NotificationsButton />
                        </div>

                        {children}
                    </div>
                    <div className='hidden md:block relative mr-[30px]'>
                        <PostsBar />
                    </div>
                </div>

                <MobileSidebar />
            </div>


        </main>
    )
}

export default AuthLayout