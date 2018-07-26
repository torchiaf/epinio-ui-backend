package cnsis

import (
	"github.com/SUSE/stratos-ui/repository/interfaces"
)

// Repository is an application of the repository pattern for storing CNSI Records
type Repository interface {
	List(encryptionKey []byte) ([]*interfaces.CNSIRecord, error)
	ListByUser(userGUID string) ([]*interfaces.ConnectedEndpoint, error)
	Find(guid string, encryptionKey []byte) (interfaces.CNSIRecord, error)
	FindByAPIEndpoint(endpoint string, encryptionKey []byte) (interfaces.CNSIRecord, error)
	Delete(guid string) error
	Save(guid string, cnsiRecord interfaces.CNSIRecord, encryptionKey []byte) error
}

type Endpoint interface {
	Init()
}
