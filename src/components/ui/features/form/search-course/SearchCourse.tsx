import { Button } from '@/components/ui/core/button'
import { cn } from '@/lib/utils'
import { CiSearch } from 'react-icons/ci'
import { Input } from '../../../core/input'
interface ISearchCourseProps {
  containerClassName?: string
}

const SearchCourse = ({ containerClassName }: ISearchCourseProps) => {
  return (
    <div className={cn('relative', containerClassName)}>
      <form>
        <CiSearch className="absolute left-3 top-1/2 w-4 -translate-y-1/2" />
        <Input className="h-12 !pl-8 !pr-24" placeholder="Search for a course" />
        <Button className="absolute right-1 top-1/2 -translate-y-1/2 px-5" size={'sm'} type="submit">
          Search
        </Button>
      </form>
    </div>
  )
}

export default SearchCourse
