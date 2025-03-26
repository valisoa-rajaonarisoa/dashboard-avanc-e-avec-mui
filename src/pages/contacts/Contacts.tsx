import { Box } from "@mui/material"
import Headers from "../../components/Headers"

type Props = {}

const Contacts = ({}: Props) => {
  return (
    // on oublie pas de mttre la margin 20 px , comme une sorte de padding
    <Box sx={{ margin: "20px" }}> 
      <Headers title="CONTACTS" subtitle="Welcome to your contacts" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum
        qui tempore delectus ut! Quos distinctio vero hic velit. Maiores nam,
        earum, non tenetur ut perferendis, et neque esse accusantium sunt
        tempore laborum odio praesentium illum ab maxime odit nemo!
      </p>
    </Box>
  )
}

export default Contacts