import { Component, OnInit, ViewChild,AfterViewInit  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user';
import { USER_DATA } from '../user';  
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements  OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role','edit','delete'];
  dataSource = new MatTableDataSource<User>(USER_DATA);
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // Fetch initial user data and data from local storage
    const initialUsers = USER_DATA;
    const storedUsers = this.storageService.getUsers();
    // Combine data, ensuring no duplicates based on ID
    const combinedUsers = this.mergeUserData(initialUsers, storedUsers);
    // Save combined data back to local storage
    this.storageService.setUsers(combinedUsers);
    // Set the data source
    this.dataSource.data = combinedUsers;
   
  }

  private mergeUserData(initialUsers: User[], storedUsers: User[]): User[] {
    const userMap = new Map<number, User>();
    initialUsers.forEach(user => userMap.set(user.id, user));
    storedUsers.forEach(user => userMap.set(user.id, user));
    return Array.from(userMap.values());
  }


  // pagination
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private dialog: MatDialog,private storageService: StorageService) {}

  // search user
  Search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  editUser(user: User): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '300px',
      data: { user: { ...user } }  
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const users = this.dataSource.data;
        const index = users.findIndex(u => u.id === result.id);
        if (index !== -1) {
          users[index] = result;
          this.storageService.setUsers(users);
          this.dataSource.data = [...users];
          
        }
      }
    });
  }


  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const users = this.dataSource.data;
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        const newUser: User = { ...result, id: newId };
        users.push(newUser);
        this.storageService.setUsers(users);
        this.dataSource.data = [...users];
      }
    });
  }

  
  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '300px',
      data: { message: `Are you sure you want to delete ${user.name}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const users = this.dataSource.data.filter(u => u.id !== user.id);
        this.storageService.setUsers(users);
        this.dataSource.data = [...users];
      }
    });
  }

}
