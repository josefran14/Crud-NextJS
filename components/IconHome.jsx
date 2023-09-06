import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/navigation';

export const IconHome = () => {

  const router = useRouter()

  const handleNavigateToHome = () =>{
    router.push("/")
  }

  return (
    <HomeIcon onClick={handleNavigateToHome} sx={{color: "white", marginLeft: "16px", cursor: "pointer"}}/>
  )
}
