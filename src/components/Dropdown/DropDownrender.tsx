import React  from 'react'
import SelectParent from './DropdownComponent.tsx'
const RenderDropDown=()=>{

    const optionsForSelect = [
        {
          id: "1",
          name: "English",
        },
        {
          id: "2",
          name: "MAths",
        },
        {
          id: "3",
          name: "Henry",
        },
      ];

    return (
        <div>
<SelectParent
                  value={[]}
                  color="secondary"
                  placeholder="ssa"
                  label={"Subject"}
                  options={optionsForSelect}
                  helperText="Error"
                  isRequired={false}
                  minWidth={300}
                  multiple
                  checkBox={true}
                  isvalid={false}
                  renderValue={(selected: any) => selected.join(", ")}
                />
        </div>
    )

}

export default RenderDropDown